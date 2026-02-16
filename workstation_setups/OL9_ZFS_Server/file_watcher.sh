#!/bin/bash
#save to /usr/local/bin/file_watcher.sh
#make executable sudo chmod +x /usr/local/bin/file-watcher.sh

WATCH_FILE="/path/to/largefile"
DEBOUNCE_SECONDS=  # adjust based on expected transfer size 15 seconds should be fine

while true; do
    # Wait for the first modification
    inotifywait -e modify "$WATCH_FILE" >/dev/null 2>&1

    # Wait for file to stabilize
    last_mod=$(stat -c %Y "$WATCH_FILE")
    while true; do
        sleep $DEBOUNCE_SECONDS
        new_mod=$(stat -c %Y "$WATCH_FILE")
        if [[ "$new_mod" == "$last_mod" ]]; then
            break
        fi
        last_mod=$new_mod
    done

    # Run your update
    /usr/local/bin/update-script-to-call.sh
done
