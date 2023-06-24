import React, { useState, useEffect } from 'react';
import { Box, Typography, BaseHeaderLayout, Button, Table, Thead, Tbody, Tr, Th, Td, BaseCheckbox, Badge } from '@strapi/design-system';
import { Plus} from '@strapi/icons';

interface Email {
  id: number;
  subject: string;
  recipient: string;
  status: string;
}
interface Entries {
  id: Number,
  email: String,
  statue: String,
  date: String,
}
interface Entry {
  email: String,
  statue: String,
  date: String,
}

const Homepage: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [entries, setEntries] = useState<Entries[]>([]);
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    email: 'o.nejdi@mayagroup.ma',
    statue: 'done',
    date: '01/13/2023 05:16:47 PM'
  };


  useEffect(() => {
    fetchEmails();
    for (let i = 0; i < 5; i++) {
      setEntries([
        ...entries,
        {
          ...entry,
          id: i
        }
      ])
    }
  }, []);

  const fetchEmails = async () => {
    //Fetch emails
  };

  const handleSendEmailCampaign = () => {
    // Logic to send a new email campaign goes here
    // You can use the Strapi API to create and send emails
    // Make sure to handle any necessary form inputs and validation
  };




  return (
    <Box>
      <Box background="neutral100">
        <BaseHeaderLayout
          primaryAction={<Button startIcon={<Plus />}>Nouvelle campagne</Button>}
          title="Bienvenue dans le plugin Emailing"
          subtitle="Un plugin qui fournit un e-mail de bout en bout, une fonctionnalité de notifications."
          as="h1"
        />
      </Box>
      <Box padding={8} background="neutral100">
          <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
            <Thead>
              <Tr>
                <Th>
                  <BaseCheckbox aria-label="Select all entries" />
                </Th>
                <Th>
                  <Typography variant="sigma">ID</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Email</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Statue</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Envoyé à</Typography>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {entries.map(entry => <Tr key={entry.id}>
                  <Td>
                    <BaseCheckbox aria-label={`Select ${entry.id}`} />
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">{entry.id}</Typography>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">{entry.email}</Typography>
                  </Td>
                  <Td>
                    <Badge size="S">{entry.statue}</Badge>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">{entry.date}</Typography>
                  </Td>
                </Tr>)}
            </Tbody>
          </Table>
        </Box>;
    </Box>
  );
};

export default Homepage;
