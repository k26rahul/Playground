n = int(input())

left = []
right = []

for i in range(n):
  l, r = list(map(int, input().split()))
  left.append(l)
  right.append(r)

sum_left = sum(left)
sum_right = sum(right)

if sum_left < sum_right:
  sum_left = sum(right)
  sum_right = sum(left)

print(n - sum_left + sum_right)
