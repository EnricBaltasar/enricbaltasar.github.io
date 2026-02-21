(function() {
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var fuse;
  var debounceTimer;

  // Fetch search index
  fetch('/index.json')
    .then(function(response) { return response.json(); })
    .then(function(data) {
      fuse = new Fuse(data, {
        keys: [
          { name: 'title', weight: 0.7 },
          { name: 'summary', weight: 0.2 },
          { name: 'content', weight: 0.1 }
        ],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.4
      });

      // Check for query param
      var params = new URLSearchParams(window.location.search);
      var query = params.get('q');
      if (query) {
        searchInput.value = query;
        performSearch(query);
      }
    });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var query = this.value.trim();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        performSearch(query);
      }, 200);
    });
  }

  function performSearch(query) {
    if (!fuse || !searchResults) return;

    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    var results = fuse.search(query);

    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found for "' + escapeHtml(query) + '"</p>';
      return;
    }

    var html = '';
    results.slice(0, 20).forEach(function(result) {
      var item = result.item;
      html += '<div class="search-result-item">';
      html += '<h3><a href="' + item.permalink + '">' + escapeHtml(item.title) + '</a></h3>';
      html += '<p>' + escapeHtml(item.summary.substring(0, 200)) + '</p>';
      if (item.date) {
        html += '<p><small>' + escapeHtml(item.date) + '</small></p>';
      }
      html += '</div>';
    });

    searchResults.innerHTML = html;
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }
})();
