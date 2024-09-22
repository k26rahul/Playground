import tkinter as tk


class Calculator(tk.Tk):
  def __init__(self):
    super().__init__()
    self.title("Calculator")
    self.geometry("400x600")
    self.resizable(0, 0)

    self.expression = ""
    self.input_text = tk.StringVar()

    self.create_widgets()

  def create_widgets(self):
    # Input field
    input_frame = tk.Frame(self, height=100, bd=0, highlightbackground="black",
                           highlightcolor="black", highlightthickness=1)
    input_frame.pack(side=tk.TOP)

    self.input_field = tk.Entry(input_frame, font=('arial', 18, 'bold'), textvariable=self.input_text,
                                width=50, bg="#eee", bd=0, justify=tk.RIGHT)
    self.input_field.grid(row=0, column=0)
    self.input_field.pack(ipady=10)
    self.input_field.focus_set()

    # Buttons frame
    self.btns_frame = tk.Frame(self, bg="grey")
    self.btns_frame.pack()

    # Buttons configuration
    buttons = [
        # First row
        ('C', 32, self.btn_clear, 3, 0, 0),
        ('/', 10, lambda: self.btn_click('/'), 1, 0, 3),

        # Second row
        ('7', 10, lambda: self.btn_click(7), 1, 1, 0),
        ('8', 10, lambda: self.btn_click(8), 1, 1, 1),
        ('9', 10, lambda: self.btn_click(9), 1, 1, 2),
        ('*', 10, lambda: self.btn_click('*'), 1, 1, 3),

        # Third row
        ('4', 10, lambda: self.btn_click(4), 1, 2, 0),
        ('5', 10, lambda: self.btn_click(5), 1, 2, 1),
        ('6', 10, lambda: self.btn_click(6), 1, 2, 2),
        ('-', 10, lambda: self.btn_click('-'), 1, 2, 3),

        # Fourth row
        ('1', 10, lambda: self.btn_click(1), 1, 3, 0),
        ('2', 10, lambda: self.btn_click(2), 1, 3, 1),
        ('3', 10, lambda: self.btn_click(3), 1, 3, 2),
        ('+', 10, lambda: self.btn_click('+'), 1, 3, 3),

        # Fifth row
        ('0', 21, lambda: self.btn_click(0), 2, 4, 0),
        ('.', 10, lambda: self.btn_click('.'), 1, 4, 2),
        ('=', 10, self.btn_equal, 1, 4, 3)
    ]

    # Create buttons using the helper function
    for (text, width, cmd, col_span, row, col) in buttons:
      self.create_button(text, width, cmd, col_span, row, col)

  def create_button(self, text, width, cmd, col_span, row, col):
    button = tk.Button(self.btns_frame, text=text, fg="black", bg="#eee", width=width, height=3,
                       bd=0, cursor="hand2", command=cmd)
    button.grid(row=row, column=col, columnspan=col_span, padx=1, pady=1)

  def btn_click(self, item):
    current_text = self.input_text.get()
    new_text = current_text + str(item)
    self.input_text.set(new_text)
    self.input_field.focus_set()
    self.input_field.icursor(tk.END)

  def btn_clear(self):
    self.expression = ""
    self.input_text.set("")

  def btn_equal(self):
    try:
      expression = self.input_text.get()
      result = str(eval(expression))
      self.input_text.set(result)
      self.expression = result
    except:
      self.input_text.set("error")
      self.expression = ""

    self.input_field.focus_set()
    self.input_field.icursor(tk.END)


if __name__ == "__main__":
  app = Calculator()
  app.mainloop()
