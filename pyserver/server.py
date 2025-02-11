from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")
socketio = SocketIO(app,cors_allowed_origins="http://localhost:3000")

@app.route('/')
def index():
    return "Hello, World!"

@socketio.on('message')
def handle_message(data):
    print('Received message: ' + str(data))
    emit('response', {'message': 'Hello from the backend!'})
    
    
@socketio.on('backend')
def message_demo(data):
    print(f"Received Message :: {data}")
    
if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
