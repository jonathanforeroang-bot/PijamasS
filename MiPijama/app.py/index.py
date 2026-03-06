from flask import Flask, render_template

app=Flask(__name__)

@app.route('/') 
def home():
    return render_template('home.html')

@app.route('/layout.html') # Define una ruta para layout.html
def layout_page():
    return render_template('layout.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/account.html')
def account():
    return render_template('account.html')

@app.route('/layout2.html')
def layout():
    return render_template('layout2.html')

@app.route('/mujer.html')
def mujer():
    return render_template('mujer.html')

@app.route('/hombre.html')
def hombre():
    return render_template('hombre.html')

@app.route('/babuchas.html')
def babuchas():
    return render_template('babuchas.html')

@app.route('/cobijas.html')
def cobijas():
    return render_template('cobijas.html')

@app.route('/niñas.html')
def niñas():
    return render_template('niñas.html')

@app.route('/niños.html')
def niños():
    return render_template('niños.html')


if __name__ == '__main__':
    app.run(debug=True)

    