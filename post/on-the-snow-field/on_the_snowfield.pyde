size(1000, 1000)
background(255)
noStroke()
fill(0)

bold_noise_x = random(10)
bold_noise_y = random(10)
change_rate = 1


back_noise_x = random(10)
back_noise_y = random(10)

rectMode(CORNER)
for mist_x in range(100):
    back_noise_x += 0.1
    for mist_y in range(100):
        back_noise_y += 0.01
        fill(0, 180, 235, noise(back_noise_x, back_noise_y)*120)
        square(mist_x*10, mist_y*10, 10)
    back_noise_y -= 1

rectMode(CENTER)
for square_x in range(0, width+50, 50):
    bold_noise_x += change_rate
    for square_y in range(0, height, 50):
        bold_noise_y += change_rate
        fill(0, 180, 235, 150 - 150 * square_y/height)
        square_bold = 10 + noise(bold_noise_x, bold_noise_y) * 50
        while square_bold > 0:
            square(square_x, square_y, square_bold)
            fill(random(40), 130 + random(100), 180 + random(75), 150 - 150 * square_y/height)
            square_bold -= random(10)
    bold_noise_y -= height / 50
    
save("on_the_snowfield.png")
