#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    backend.models
    ~~~~~~~~~~~~~~

    This module implements the database models of this application.

    For more information on how to create models:
        - Flask-SQLAlchemy : http://flask-sqlalchemy.pocoo.org/2.1/
        - SQLAlchemy       : http://www.sqlalchemy.org/

    For more information on how to hash passwords:
        - Flask-Bcrypt : https://flask-bcrypt.readthedocs.io/en/latest/
"""

from backend import db, bcrypt


class User(db.Model):
    """This is the first model in the database."""
    __tablename__ = 'users'

    # Fields in this model
    id       = db.Column(db.Integer, primary_key=True)
    name     = db.Column(db.String, nullable=False)
    email    = db.Column(db.String(50), nullable=False, unique=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    def __init__(self, name, email, username, password):
        """
        This function initializes this model. This function is necessary
        since we are hashing the user's password before storing it into 
        the database.
        """
        self.name     = name
        self.email    = email
        self.username = username
        # Protecting the user's password using a hash function
        self.password = bcrypt.generate_password_hash(password)
    
    def check_password(self, password):
        """This is a helper function for checking the user's password."""
        return bcrypt.check_password_hash(self.password, password)

class Vehicle(db.Model):
    """This is the second model in the database."""
    __tablename__ = 'vehicle'

    # Fields in this model
    id          = db.Column(db.Integer, primary_key=True)
    userId      = db.Column(db.Integer, db.ForeignKey('users.id'))
    make        = db.Column(db.String, nullable=False)
    model       = db.Column(db.String, nullable=False)
    year        = db.Column(db.Integer, nullable=False)
    color       = db.Column(db.String, nullable=False)
    pdriver     = db.Column(db.String, nullable=False)
    nickname    = db.Column(db.String, nullable=False)

class Active(db.Model):
    """This is the third model in the database."""
    __tablename__ = 'active'

    # Fields in this model
    id          = db.Column(db.Integer, primary_key=True)
    vehicleId   = db.Column(db.Integer, db.ForeignKey('vehicle.id'))
    vuserId     = db.Column(db.Integer, db.ForeignKey('users.id'))
    mtype       = db.Column(db.String, nullable=False)
    date        = db.Column(db.DateTime, nullable=False)
    mechanic    = db.Column(db.String, nullable=False)

# More models can be added here...