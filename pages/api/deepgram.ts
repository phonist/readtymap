export const speech2Text = () => {
    const text = '';
    return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {    

            // Remove this IF STATEMENT if you will be integrating with your mobile phone.
            if (!MediaRecorder.isTypeSupported('audio/webm')) { 
                return alert('Browser not supported.');
            }
        
            const mediaRecorder = new MediaRecorder(stream);
            const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
                'token',
                process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY,
            ]);
            socket.onopen = () => {
                mediaRecorder.addEventListener('dataavailable', async (event) => {
                    if (event.data.size > 0 && socket.readyState == 1) {
                    socket.send(event.data);
                    }
                });
                mediaRecorder.start(250);
            }
            
            socket.onmessage = message => {
                text = '';
                const received = JSON.parse(message.data);
                const transcript = received.channel.alternatives[0].transcript;
        
                if (transcript && received.is_final) {
                    text += transcript;
                    mediaRecorder.stop();
                    socket.close();
                }
            }
            
            socket.onclose = () => {
                resolve(text);
            }
            
            socket.onerror = error => {}
        });
    });
}
