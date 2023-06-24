import React, { useState, useEffect } from 'react';
import { Container, Heading, Button, Table } from '@strapi/design-system';
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
    <Container>
      <Heading variant="h1">Email Plugin Homepage</Heading>
      
      <Button onClick={handleSendEmailCampaign} variant="primary">
        Send New Email Campaign
      </Button>
      
      <Heading variant="h2">Sent Emails</Heading>
      
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Recipient</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.id}</td>
              <td>{email.subject}</td>
              <td>{email.recipient}</td>
              <td>{email.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Homepage;
