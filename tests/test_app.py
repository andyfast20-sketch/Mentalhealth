from app import app


def test_routes_status():
    client = app.test_client()
    for path in ['/', '/about', '/resources', '/contact']:
        resp = client.get(path)
        assert resp.status_code == 200
