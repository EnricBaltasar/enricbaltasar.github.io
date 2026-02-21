Run the Hugo dev server by executing the startup script:

```bash
bash scripts/start-hugo-server.sh
```

The script will:
1. Check if port 1313 is in use
2. If it's Hugo, kill the existing process
3. If it's another process, abort and notify you
4. Start `hugo server --port 1313`
