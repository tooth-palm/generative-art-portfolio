divide_num = 180

size(1000, 1000)
background(0)
stroke(255)

class LineCircle():
    
    def __init__(self, ):
        self.degree = random(360)
        #self.rotate_speed = random(10)
        if (diameter > 100):
            gain = diameter*0.10
        else:
            gain = 40
        
        self.diameter = diameter*0.90 + random(gain)
        #self.diameter = diameter
        
    def set_pos(self):
        self.x = 500 + sin(radians(self.degree)) * self.diameter
        self.y = 500 + cos(radians(self.degree)) * self.diameter
        
    def update(self):
        #self.degree += self.rotate_speed
        if self.degree >= 360:
            self.degree -= 360

for diameter in range(701, 0, -30):
    points = []            
    for rad_point in range(divide_num):
        points.append(LineCircle())
        
    for i in range(divide_num):
        points[i].degree = 360 / divide_num * i
        points[i].set_pos()
        if i>0:
            stroke(0, random(255), 255, random(255))
            line(points[i].x, points[i].y, points[i-1].x, points[i-1].y)
            
    line(points[-1].x, points[-1].y, points[0].x, points[0].y)
    
save("noise_circle_7.png")
