class RectPoint():
    
    def __init__(self, direction):
        self.direction = direction
        self.sway_noise = random(10)
        self.sway_depth = random(600)
        self.start_pos = random(1000)
        self.change_rate = random(5, 10) * 0.01
        calc_sway = (noise(self.sway_noise) - 0.5) * self.sway_depth
        if self.direction == 0:
            self.x = 0
            self.y = self.start_pos + calc_sway
        elif self.direction == 1:
            self.x = self.start_pos + calc_sway
            self.y = 0
        elif self.direction == 2:
            self.x = 1000
            self.y = self.start_pos + calc_sway
        elif self.direction == 3:
            self.x = self.start_pos + calc_sway
            self.y = 1000
        
    def update(self):
        self.sway_noise += self.change_rate
        calc_sway = (noise(self.sway_noise) - 0.5) * self.sway_depth
        if self.direction == 0:
            self.x += 1
            self.y = self.start_pos + calc_sway
        elif self.direction == 1:
            self.x = self.start_pos + calc_sway
            self.y += 1
        elif self.direction == 2:
            self.x -= 1
            self.y = self.start_pos + calc_sway
        elif self.direction == 3:
            self.x = self.start_pos + calc_sway
            self.y -= 1
        
        
size(1000, 1000)
background(0)
fill(200, 5)
stroke(200, 100)
points = []

for i in range(4):
    points += [RectPoint(i)]

for frame in range(width):
    for pt in points:
        pt.update()
    quad(points[0].x, points[0].y, 
         points[1].x, points[1].y, 
         points[2].x, points[2].y, 
         points[3].x, points[3].y)
    
save("swaying_quadrangle5.png")
