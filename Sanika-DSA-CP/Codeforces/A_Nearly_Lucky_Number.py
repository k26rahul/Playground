# Get the input number as a string
num = input()


def is_lucky(number):
  '''
  Function to check if a number is lucky (contains only 4 and 7)
  '''
  for digit in str(number):
    # Check if the digit is not 4 or 7
    if digit not in {'4', '7'}:
      return False
  return True


# Count the occurrences of lucky digits (4 and 7) in the input number
count_of_lucky_digits = num.count('4') + num.count('7')

# Determine if the count of lucky digits is itself a lucky number
result = 'YES' if is_lucky(count_of_lucky_digits) else 'NO'

# Print the result
print(result)
