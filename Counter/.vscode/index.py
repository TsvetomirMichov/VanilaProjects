from tkinter import N


def mydef(n):
    return lambda a:a*n

myInt=mydef(2)
print(myInt(11))