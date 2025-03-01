def compute_series(x, n):
    if n < 1:
        return 0  # Handle invalid cases

    sum_result = x
    term1 = x
    term2 = x**2

    for i in range(3, n + 1):
        new_term = term1 + term2
        sum_result += new_term
        term1, term2 = term2, new_term  # Shift Fibonacci sequence

    return sum_result

# Example usage
x = 0.5  # Input value
n = 10  # Number of terms
print("Approximation:", compute_series(x, n))
