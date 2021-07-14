class TrianglePoint():
    
    def __init__(self):
        self.degree = random(360)
        self.rotate_speed = random(10)
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
background(0)
stroke(255, 100)
fill(255, 5)
        
diameter = 500
point1 = TrianglePoint()
point2 = TrianglePoint()
point3 = TrianglePoint()
points = [point1, point2, point3]

for _ in range(diameter):
    for pt in points:
        pt.update()
        pt.set_pos()
    triangle(point1.x, point1.y, point2.x, point2.y, point3.x, point3.y)
    
