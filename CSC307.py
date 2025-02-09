
# Step 1: Initialize epsilon
epsilon = 1.0
r = 1.0 + epsilon

# Step 2: Loop until r is no longer greater than 1.0
while r > 1.0:
    epsilon = epsilon / 2.0
    r = 1.0 + epsilon

# Step 3: Display the machine epsilon (previous epsilon before condition failed)
print("Machine epsilon:", epsilon * 2)
