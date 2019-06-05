import random

print("Welcome to rock paper scissors!")

options = ["r","p","s"]

computer_choice = random.choice(options)

user_choice = input("Make your choice: (r)ock, (p)aper, (s)cissors.")

if (user_choice == "r" and computer_choice =="P"):
    print("You choss rock, and the computer chose paper.")
    print("Sorry you lose!")

elif (user_choice == "r" and computer_choice == "s"):
    print("You chose rock and the computer chose scissors.")
    print("You win!")

elif (user_choice == "r" and computer_choice == "r"):
    print("You chose rock and the computer chose rock.")
    print("Tie!")

elif (user_choice == "s" and computer_choice == "p"):
    print("You chose scissors and the computer chose paper.")
    print("You win!")

elif (user_choice == "s" and computer_choice == "r"):
    print("You chose scissors and the computer chose rock.")
    print("You lose!")

elif (user_choice == "s" and computer_choice == "s"):
    print("You chose scissors and the computer chose scissors.")
    print("Tie!")

elif (user_choice == "p" and computer_choice == "s"):
    print("You chose paper and the computer chose scissors.")
    print("You lose!")

elif (user_choice == "p" and computer_choice == "r"):
    print("You chose paper and the computer chose rock.")
    print("You win!")

elif (user_choice == "p" and computer_choice == "p"):
    print("You chose paper and the computer chose paper.")
    print("Tie!")
