size(1000, 1000)
background(170)
noFill()
stroke(0)

def draw_line(x1, y1, colored):
    rate = get_rate(x1, y1)
    line_length = 30 / rate
    strokeWeight(3*rate)
    if colored == "mono":
        stroke(255 * (1 - rate*2))
    elif colored == "yellow":
        stroke(255, 220, 0, 255 * rate)
        #stroke(80, 250, 240, 255 * rate)
    elif colored == "red":
        stroke(140, 60, 35, 255 * rate)
    elif colored == "gray":
        stroke(170, 170, 170, 255 * rate)
    x2 = x1 + sin(radians(random(360))) * line_length
    y2 = y1 + cos(radians(random(360))) * line_length
    line(x1, y1, x2, y2)
    
def get_rate(x, y):
    marginal_distance = 600
    center_x = 500
    center_y = 500
    distance = sqrt( abs(x - center_x)**2 + abs(y - center_y)**2 )
    return abs(marginal_distance - distance) / marginal_distance

    
for _ in range(50000):
    x = randomGaussian() * 300 + 500
    y = randomGaussian() * 300 + 500
    if random(1000) < 40:
        draw_line(x, y, "yellow")
    elif random(1000) < 80:
        draw_line(x, y, "red")
    elif random(1000) < 120:
        draw_line(x, y, "gray")
    else:
        draw_line(x, y, "mono")
        
save("gaussian_pollock.png")
    
