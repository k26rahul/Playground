# Input values
k = int(input())
l = int(input())
m = int(input())
n = int(input())
d = int(input())

# Variable to count damage
damage = 0

# Loop through dragons and check for damage
for i in range(1, d + 1):
  if i % k == 0 or i % l == 0 or i % m == 0 or i % n == 0:
    damage += 1

# Print the total damage count
print(damage)
