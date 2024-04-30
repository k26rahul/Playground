"""
Rock Paper Scissors Game with Scores

- Implements a Rock Paper Scissors game with score tracking.
- Allows continuous play until the user decides to quit.
- User inputs their choice using 'r' for rock, 'p' for paper, 's' for scissors, or presses Enter to quit.
- Computer randomly selects its choice for each round.
- Displays user's choice, computer's choice, and the outcome of each round.
- Displays scores before the next round starts.
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

# Outcome results (winning) for each choice
outcome_results = {
    'rock': {
        'paper': False,
        'scissors': True
    },
    'paper': {
        'scissors': False,
        'rock': True
    },
    'scissors': {
        'rock': False,
        'paper': True
    }
}

# Game scores
scores = {'user': 0, 'computer': 0, 'tie': 0}


def play_game(user_choice):
  user_choice = user_choices_map[user_choice]
  computer_choice = random.choice(choices)

  # Print choices
  print(f"You chose: {user_choice.capitalize()}")
  print(f"Computer chose: {computer_choice.capitalize()}")

  # Determine outcome
  if user_choice == computer_choice:
    print("It's a tie!")
    scores['tie'] += 1
  else:
    print(outcome_messages[user_choice][computer_choice])
    if outcome_results[user_choice][computer_choice]:
      scores['user'] += 1
    else:
      scores['computer'] += 1


def main():
  while True:
    user_choice = input(
        "Enter a choice (r for rock, p for paper, s for scissors) or press Enter to quit: ").lower()

    # Quit if Enter is pressed
    if not user_choice:
      print('Quitting')
      break

    # Check for invalid choice
    if user_choice not in user_choices_map:
      print("Invalid choice!")
      continue

    # Play the game
    play_game(user_choice)

    # Print scores
    print(f"Your score: {scores['user']}, Computer score: {
        scores['computer']}, Ties: {scores['tie']}")
    print()


main()
