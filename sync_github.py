import os
import sys
import json
import base64
import urllib.request

TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO = "nicolecharbit/the-liaison-collective"

def sync_file(file_path):
    url = f"https://api.github.com/repos/{REPO}/contents/{file_path}"
    headers = {
        "Authorization": f"token {TOKEN}",
        "User-Agent": "Python-GitHub-Sync",
        "Content-Type": "application/json"
    }
    
    # Check if file exists to get SHA
    sha = None
    try:
        req = urllib.request.Request(url, headers=headers)
        res = urllib.request.urlopen(req)
        sha = json.loads(res.read()).get("sha")
    except Exception:
        pass
        
    with open(file_path, "rb") as f:
        content = base64.b64encode(f.read()).decode("utf-8")
        
    payload = {
        "message": f"Auto-sync {file_path}",
        "content": content
    }
    if sha:
        payload["sha"] = sha
        
    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="PUT")
    try:
        res = urllib.request.urlopen(req)
        print(f"SUCCESS: {file_path} synced to GitHub.")
        return True
    except Exception as e:
        err_msg = e.read().decode('utf-8') if hasattr(e, 'read') else str(e)
        print(f"ERROR syncing {file_path}: {err_msg}")
        return False

if __name__ == "__main__":
    if not TOKEN:
        print("GITHUB_TOKEN not provided.")
        sys.exit(1)
        
    files_to_sync = [
        "index.html", "styles.css", "app.js",
        "nicole_portrait_1.jpg", "nicole_portrait_2.jpg", "nicole_portrait_3.jpg",
        "glossier.png", "salomon.png", "supreme_editorial_spread.jpg",
        "dominic_fike_tour.jpg", "nate_sib.png", "dexter.png",
        "rollingstone_hero_ad.jpg", "spotify_modern_ad.jpg"
    ]
    
    for f in files_to_sync:
        if os.path.exists(f):
            sync_file(f)
