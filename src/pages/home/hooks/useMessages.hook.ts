import { Message } from '@/models';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_CHAT!);

const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    socket.emit('initial');
  }, []);
  useEffect(() => {
    socket.on('message', messages => {
      console.log(messages);

      setMessages(messages);
    });
  }, [messages]);
  return {
    messages
  };
};

export default useMessages;
