# Mentalhealth

A small, beautiful demo site about mental health built with Flask — designed to be responsive, accessible and easy to deploy.

## Quick start (Windows cmd.exe)

1) Create and activate a venv:

```cmd
python -m venv .venv
.venv\Scripts\activate
```

2) Install dependencies:

```cmd
pip install -r requirements.txt
```

3) Run the app:

```cmd
python app.py
```

Open http://127.0.0.1:5000 in your browser to preview.

## Deploying behind Cloudflare

Two common paths:

- Reverse proxy / CDN: Keep this site hosted (e.g. on Fly, Render, or a server) and add Cloudflare as a DNS/HTTP proxy for SSL, WAF, and caching.
- Cloudflare Tunnel: use `cloudflared` to expose a local server securely (no public IP needed). Example:

```cmd
cloudflared tunnel login
cloudflared tunnel create mentalhealth-tunnel
cloudflared tunnel route dns mentalhealth-tunnel yourdomain.example.com
cloudflared tunnel run mentalhealth-tunnel
```

## Tests

Run tests using pytest:

```cmd
pytest -q
```

---
If you'd like I can add CI for testing and deployment that uses Cloudflare (Tunnel or Pages) or help connect the repo to a hosting provider — tell me which flow you'd prefer.