word = input()

# Count the number of uppercase letters in the word
upper_count = 0
for letter in word:
  if letter.isupper():
    upper_count += 1

# Calculate the number of lowercase letters by subtracting the uppercase count from the total length
lower_count = len(word) - upper_count

# Choose the case based on counts and print the result
if upper_count > lower_count:
  print(word.upper())
else:
  print(word.lower())
