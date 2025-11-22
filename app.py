from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/")
def home():
	"""Render the site home page."""
	return render_template("index.html")


@app.route("/about")
def about():
	"""About page."""
	return render_template("about.html")


@app.route("/resources")
def resources():
	"""Helpful resources and guides."""
	return render_template("resources.html")


@app.route("/contact")
def contact():
	"""Contact / get help page."""
	return render_template("contact.html")


if __name__ == "__main__":
	# Run development server on localhost:5000
	app.run(host="127.0.0.1", port=5000, debug=True)
