#!/bin/bash

PORT=1313

# Check if something is running on the port
PID=$(lsof -ti ":$PORT" 2>/dev/null)

if [ -n "$PID" ]; then
  PROCESS_NAME=$(ps -p "$PID" -o comm= 2>/dev/null)

  if echo "$PROCESS_NAME" | grep -qi "hugo"; then
    echo "Hugo is already running on port $PORT (PID $PID). Killing it..."
    kill -9 "$PID"
    echo "Done."
  else
    echo "Port $PORT is in use by '$PROCESS_NAME' (PID $PID), which is not Hugo. Aborting."
    exit 1
  fi
fi

# Start Hugo server
hugo server --port $PORT
