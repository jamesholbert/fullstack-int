from flask import Flask, flash, redirect, render_template, request, session, abort, url_for
import json
import os
tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src/dist')
application = Flask(__name__, template_folder=tmpl_dir)

@application.route("/")
@application.route("/index")
def index():
    return render_template('index.html') 

if __name__ == "__main__":
    application.run(debug=True)
    # application.run()    

