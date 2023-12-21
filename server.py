
from http.server import HTTPServer, BaseHTTPRequestHandler, SimpleHTTPRequestHandler, CGIHTTPRequestHandler
import logging

class webserverHandler(SimpleHTTPRequestHandler):
    """An extension of the ability to handle POST requests from SimpleHTTPREquestHandler
    
    To Do:
    - dynamic navigation wrapper width and margin-left
    - flipped div that repeat-x for background, so that translate can be in pixels
    
    """

    def do_POST(self):
        content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
        post_data = self.rfile.read(content_length) # <--- Gets the data itself
        print("POST request,\nPath: %s\nHeaders:\n%s\n\nBody:\n%s\n" % (str(self.path), str(self.headers), post_data.decode('utf-8')))
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write("POST request for {}".format(self.path).encode('utf-8'))


def main():
    try:
        port = 8000
        server = HTTPServer(('', port), webserverHandler)
        print("Web server running on port %s" % port)
        server.serve_forever()

    except KeyboardInterrupt:
        print(" ^C entered stopping web server...")
        server.socket.close()

if __name__ == '__main__':
    main()
    
