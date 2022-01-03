size(500, 500)
background(0)
divide = 24
rect_size = 20
rect_num = 100
rects_x = []
rects_y = []
rects_r = []
rects_g = []
rects_b = []


def init_kaleido():
    for i in range(rect_num):
        rects_x.append(random(width/2))
        rects_y.append(random(height/2))
        rects_r.append(random(255))
        rects_g.append(random(255))
        rects_b.append(random(255))


def draw_piece():
    noStroke()
    fill(100+random(155), 100+random(155), 100+random(155), 80)
    for i in range(rect_num):
        # fill(rects_r[i], rects_g[i], rects_b[i], 150)
        rect(rects_x[i], rects_y[i], rect_size, rect_size)
    

init_kaleido()
translate(width/2, height/2)
for _ in range(divide):
    rotate(PI*1 / (divide/2))
    draw_piece()
save("kaleidoscope6.png")
