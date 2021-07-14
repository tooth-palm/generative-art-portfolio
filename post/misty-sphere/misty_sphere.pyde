DIST_CIRCLE = 20
MARGINAL_DISTANCE = 500

def get_rate(x, y):
    center_x = 500
    center_y = 500
    distance = sqrt( abs(x - center_x)**2 + abs(y - center_y)**2 )
    if distance < MARGINAL_DISTANCE:
        return (MARGINAL_DISTANCE - distance) / MARGINAL_DISTANCE
    else:
        return 0
    
noise_r_x = random(10)
noise_g_x = random(10)
noise_b_x = random(10)
noise_r_y = random(10)
noise_g_y = random(10)
noise_b_y = random(10)
noise_r_t = random(10)
noise_g_t = random(10)
noise_b_t = random(10)
change_rate = 0.05

def setup():
    size(1000, 1000)
    smooth()
    background(0)
    noStroke()
    frameRate(12)

def draw():
    global noise_r_x, noise_g_x, noise_b_x, noise_r_y, noise_g_y, noise_b_y, noise_r_t, noise_g_t, noise_b_t
    y_cnt = 0
    for y in range(DIST_CIRCLE, 1000, DIST_CIRCLE):
        y_cnt+=1
        x_cnt = 0
        for x in range(DIST_CIRCLE, 1000, DIST_CIRCLE):
            x_cnt+=1
            r = noise(noise_r_x, noise_r_y, noise_r_t) * 255
            g = noise(noise_g_x, noise_g_y, noise_g_t) * 255
            b = noise(noise_b_x, noise_b_y, noise_b_t) * 255
            fill(r, g, b)
            circle(x, y, DIST_CIRCLE*12*get_rate(x, y))
            noise_r_x += change_rate
            noise_g_x += change_rate
            noise_b_x += change_rate
        noise_r_y += change_rate
        noise_g_y += change_rate
        noise_b_y += change_rate
        noise_r_x = noise_r_x - change_rate * x_cnt
        noise_g_x = noise_g_x - change_rate * x_cnt
        noise_b_x = noise_b_x - change_rate * x_cnt
    noise_r_t += change_rate
    noise_g_t += change_rate
    noise_b_t += change_rate
    noise_r_y = noise_r_y - change_rate * y_cnt
    noise_g_y = noise_g_y - change_rate * y_cnt
    noise_b_y = noise_b_y - change_rate * y_cnt
        

        
