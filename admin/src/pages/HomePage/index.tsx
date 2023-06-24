import React, { useState, useEffect } from 'react';
import { Box, Typography, Heading } from '@strapi/design-system';
import axios from 'axios';

interface Email {
  id: number;
  subject: string;
  recipient: string;
  status: string;
}

const Homepage: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/emails'); // Replace with your Strapi API endpoint for fetching emails
      setEmails(response.data);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const handleSendEmailCampaign = () => {
    // Logic to send a new email campaign goes here
    // You can use the Strapi API to create and send emails
    // Make sure to handle any necessary form inputs and validation
  };

  return (
    <Box padding={4}>
      <Box background="primary700" borderRaduis={10} padding={4}>
         <Typography variant="alpha" textColor="neutral0">Bienvenue sur strapi emailing</Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
