from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required
from flask_wtf import FlaskForm
from werkzeug.utils import redirect
from wtforms import StringField,PasswordField,SubmitField,IntegerField
from wtforms.validators import InputRequired,Length
import hashlib


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'mysql+pymysql://root:''@localhost/infinosbox'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
app.config['SECRET_KEY'] = "shravanissshravanissshravaniss"

db=SQLAlchemy(app)

login_manager= LoginManager()
login_manager.init_app(app)
login_manager.login_view="login"


@login_manager.user_loader
def load_user(user_id):
    return Useruthentication.query.get(int(user_id))


class Useruthentication(db.Model,UserMixin):
    __tablename__ = 'user'
    id=db.Column('userID',db.Integer,primary_key=True)
    mailid=db.Column('mailID',db.String(40))
    userpassword=db.Column('userPassword',db.String(33))


class Board(db.Model,UserMixin):
    __tablename__ = 'board'
    boardid=db.Column('boardID',db.Integer,primary_key=True)
    boardpassword=db.Column('boardPassword',db.String(33))

@app.route('/')
def home():
    return render_template('home.html')

class LoginForm(FlaskForm):
    mailid=StringField(validators=[InputRequired(),Length(min=4,max=20)], render_kw={"placeholder":"Mail-Id"})
    userpassword=PasswordField(validators=[InputRequired(),Length(min=4,max=20)], render_kw={"placeholder":"Password"})
    submit=SubmitField("Login")


class BoxLoginForm(FlaskForm):
    boardid=IntegerField(validators=[InputRequired()], render_kw={"placeholder":"Board-Id"})
    boardpassword=PasswordField(validators=[InputRequired(),Length(min=4,max=20)], render_kw={"placeholder":"Board-Password"})
    submit=SubmitField("Login")

@app.route('/user',methods=["GET","POST"])
def user():
    form=LoginForm()
    if form.validate_on_submit():
        user=Useruthentication.query.filter_by(mailid=form.mailid.data).first()
        md5=hashlib.md5(form.userpassword.data.encode())
        if user and user.userpassword==md5.hexdigest():
            login_user(user)
            return redirect(url_for('dashboard'))
    return render_template('user.html',form=form)

@app.route('/dashboard',methods=["GET","POST"])
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/board',methods=["GET","POST"])
@login_required
def board():
    form=BoxLoginForm()
    if form.validate_on_submit():
        user=Board.query.filter_by(boardid=form.boardid.data).first()
        md5=hashlib.md5(form.boardpassword.data.encode())
        if user and user.boardpassword==md5.hexdigest():
            return "Box successfully logged in"
    return render_template('board.html',form=form)


if __name__ == "__main__":
    app.run(debug=True)
