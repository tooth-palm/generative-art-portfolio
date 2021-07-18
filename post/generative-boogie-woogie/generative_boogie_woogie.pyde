#parameters
size(500, 500)
line_span = 10
span_rate_left, span_rate_right = 4, 1.2
span_rate_tile = 1.1
span_rate_tile_mid = 1.05
span_rate_tile_big = 1.01
line_bold = 2
line_color = color(0)
tile_color_1 = color(255, 0, 0)
tile_color_2 = color(0, 0, 255)
tile_color_3 = color(255, 255, 0)

#logic
background(255)
strokeWeight(line_bold)
stroke(line_color)
for x in range(0, width*2, line_span):
    for y in range(0, x, line_span/2):
        if random(span_rate_left) < 1:
            continue
        else:
            line(x-y, y, x-y-line_span/2, y+line_span/2)
            
for x in range(-width, width, line_span):
    for y in range(0, width, line_span/2):
        if random(span_rate_right) < 1:
            continue
        else:
            line(x+y, y, x+y+line_span/2, y+line_span/2)
            
for x in range(0, width*2, line_span):
    for y in range(0, x, line_span/2):
        if random(span_rate_tile) < 1:
            continue
        else:
            color_select = random(3)
            if color_select < 1:
                fill(tile_color_1)
            elif color_select < 2:
                fill(tile_color_2)
            else:
                fill(tile_color_3)
            quad(x-y, y, x-y-line_span/2, y+line_span/2, x-y, y+2*line_span/2, x-y+line_span/2, y+line_span/2)
            
for x in range(0, width*2, line_span):
    for y in range(0, x, line_span):
        if random(span_rate_tile_mid) < 1:
            continue
        else:
            color_select = random(3)
            if color_select < 1:
                fill(tile_color_1)
            elif color_select < 2:
                fill(tile_color_2)
            else:
                fill(tile_color_3)
            quad(x-y, y, x-y-line_span, y+line_span, x-y, y+2*line_span, x-y+line_span, y+line_span)
            
for x in range(0, width*2, line_span):
    for y in range(0, x, line_span*2):
        if random(span_rate_tile_big) < 1:
            continue
        else:
            color_select = random(3)
            if color_select < 1:
                fill(tile_color_1)
            elif color_select < 2:
                fill(tile_color_2)
            else:
                fill(tile_color_3)
            quad(x-y, y, x-y-line_span*2, y+line_span*2, x-y, y+2*line_span*2, x-y+line_span*2, y+line_span*2)
            
save("generative_boogie_woogie2.png")
