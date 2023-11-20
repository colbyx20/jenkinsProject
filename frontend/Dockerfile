FROM nginx
# copy index.html file to default nginx web root dir
COPY index.html /usr/share/nginx/html/index.html
COPY app.css /usr/share/nginx/html

COPY ./ssl /etc/nginx/ssl

RUN apt update -y
RUN apt install -y nano

#Expose port
EXPOSE 3000
