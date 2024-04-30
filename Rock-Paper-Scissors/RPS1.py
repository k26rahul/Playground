"""
Rock Paper Scissors Game

- Implements a simple Rock Paper Scissors game.
- Allows the user to play a single round against the computer.
- User inputs their choice using 'r' for rock, 'p' for paper, 's' for scissors.
- Computer randomly selects its choice.
- Displays user's choice, computer's choice, and the outcome of the game.
- Notifies the user if an invalid choice is entered.
"""


import random

# Possible choices
choices = ['rock', 'paper', 'scissors']

# Map user input abbreviations to full choice names
user_choices_map = {
    'r': 'rock',
    'p': 'paper',
    's': 'scissors'
}

# Outcome messages for each choice
outcome_messages = {
    'rock': {
        'paper': "Paper covers rock, you lose!",
        'scissors': "Rock crushes scissors, you win!"
    },
    'paper': {
        'scissors': "Scissors cuts paper, you lose!",
        'rock': "Paper covers rock, you win!"
    },
    'scissors': {
        'rock': "Rock crushes scissors, you lose!",
        'paper': "Scissors cuts paper, you win!"
    }
}


def play_game(user_choice):
  user_choice = user_choices_map[user_choice]  # Convert user input to full choice
  computer_choice = random.choice(choices)

  # Print choices
  print(f"You chose: {user_choice.capitalize()}")
  print(f"Computer chose: {computer_choice.capitalize()}")

  # Print outcome
  if user_choice == computer_choice:
    print("It's a tie!")
  else:
    print(outcome_messages[user_choice][computer_choice])


def main():
  user_choice = input("Enter a choice (r for rock, p for paper, s for scissors): ").lower()

  if user_choice in user_choices_map:
    play_game(user_choice)
  else:
    print("Invalid choice!")


main()
