num_of_circle = 50
circle_rnd_size = 180

size(1000, 1000)
background(0)
fill(122, 20)
stroke(200, 100)
    
for d_circle in range(50, floor(width*1.5), width / num_of_circle):
    end_arc = 0
    arc_flag = False
    while end_arc < radians(360):
        arc_size = radians(random(circle_rnd_size))
        if arc_flag == True:
            arc(width/2, height/2, d_circle, d_circle, end_arc, end_arc + arc_size, CHORD)
            arc_flag = False
        else:
            arc_flag = True
        end_arc = end_arc + arc_size
        
