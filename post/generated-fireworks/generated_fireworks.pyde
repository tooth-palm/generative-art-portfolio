class LinePoint():
    
    def __init__(self):
        self.degree = random(360)
        self.rotate_speed = random(2)
        self.shrink_speed = random(3)
        self.diameter = 400 + random(100)

    def set_pos(self):
        self.x = 500 + sin(radians(self.degree)) * self.diameter
        self.y = 500 + cos(radians(self.degree)) * self.diameter
        
    def update(self):
        self.diameter -= self.shrink_speed
        if self.diameter < 0:
            self.diameter = 0
            
        self.degree += self.rotate_speed
        if self.degree >= 360:
            self.degree -= 360
            
size(1000, 1000)
background(20, 0, 60)
strokeWeight(2)
stroke(255, 100)
noFill()
colorMode(HSB)

noise_h_t = random(10)
noise_s_t = random(10)
noise_b_t = random(10)
change_rate = 0.01


for _ in range(5):
    diameter = 500
    point1 = LinePoint()
    point2 = LinePoint()
    points = [point1, point2]
    for _ in range(diameter*2):
        for pt in points:
            pt.update()
            pt.set_pos()
        stroke(0 + noise(noise_h_t)*50, noise(noise_s_t)*255, 100 + noise(noise_b_t)*155)
        line(point1.x, point1.y, point2.x, point2.y)
        noise_h_t += change_rate
        noise_s_t += change_rate
        noise_b_t += change_rate
        
