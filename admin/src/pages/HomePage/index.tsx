import React, { useState, useEffect } from 'react';
import { Box, Typography, BaseHeaderLayout, Button, Table, Thead, Tbody, Tr, Th, Td, BaseCheckbox, Badge, ModalLayout, ModalHeader, ModalBody, ModalFooter, Accordion, AccordionToggle, IconButton, AccordionContent, Checkbox } from '@strapi/design-system';
import { Plus } from '@strapi/icons';
import { getUsers } from '../../../../services/users';

type IsVisible = boolean;
type Expanded = boolean;
type CurrentStep = number;
type NextStepActive = boolean;
type CurrentOption = any;
type CurrentOptionSending = any;
type Email = {
  id: number;
  subject: string;
  recipient: string;
  status: string;
}
type Entries = {
  id: Number,
  email: String,
  statue: String,
  date: String,
}

const Homepage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<IsVisible>(false);
  const [expanded, setExpanded] = useState<Expanded>(false)
  const [currentStep, setCurrentStep] = useState<CurrentStep>(1);
  const [nextStepActive, setNextStepActive] = useState<NextStepActive>(false)
  const [currentOption, setCurrentOption] = useState<CurrentOption>(null);
  const [currentOptionSending, setCurrentOptionSending] = useState<CurrentOptionSending>(null);

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
          id: i,
        }
      ])
    }
  }, []);

  const optionHandler = (option: number) => {
    setCurrentOption(option)
    setNextStepActive(true)
  }

  const optionSendingHandler = (option: number) => {
    setCurrentOptionSending(option)
  }

  const stepHandler = (step: number) => {
    setCurrentStep(step)
  }

  const fetchEmails = async () => {
    getUsers()
      .then((res:any) => {
        const filtred_emails = res.map((item:any)=>item.email)
        setEmails(filtred_emails)
      })
      .catch(e => console.log(e))
  };

  const handleSendEmailCampaign = () => {
    // Logic to send a new email campaign goes here
    // You can use the Strapi API to create and send emails
    // Make sure to handle any necessary form inputs and validation
  };




  return (
    <>
      <Box>
        <Box background="neutral100">
          <BaseHeaderLayout
            primaryAction={<Button onClick={() => setIsVisible(prev => !prev)} startIcon={<Plus />}>Nouvelle campagne</Button>}
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
                  <Badge size="S" variant="success">{entry.statue}</Badge>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{entry.date}</Typography>
                </Td>
              </Tr>)}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isVisible && <ModalLayout onClose={() => setIsVisible(prev => !prev)} labelledBy="title">
        <ModalHeader>
          <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title"> Créer une nouvelle campagne </Typography>
        </ModalHeader>
        <ModalBody>
          <Box display={currentStep !== 1 && "none"}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
              <h1>Choisissez ce que vous voulez faire dans cette campagne</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <Button variant={currentOption == 1 ? 'primary' : 'secondary'} size="L" onClick={() => optionHandler(1)} >Nouvelles e-mails</Button>
              <Button variant={currentOption == 2 ? 'primary' : 'secondary'} size="L" onClick={() => optionHandler(2)} >Nouvelles notifications</Button>
            </div>
          </Box>
          <Box display={currentStep !== 2 && "none"}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
              <h1>Choisissez ce que vous voulez envoyer pour cela</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <Button variant={currentOptionSending == 1 ? 'primary' : 'secondary'} size="L" onClick={() => optionSendingHandler(1)} >Tous les utilisateurs</Button>
              <Button variant={currentOptionSending == 2 ? 'primary' : 'secondary'} size="L" onClick={() => optionSendingHandler(2)} >Utilisateurs spécifiques</Button>
            </div>
            <Box padding={8} background="neutral0">
              <Accordion expanded={expanded} onToggle={() => setExpanded(s => !s)} id="acc-4" variant="secondary">
                <AccordionToggle togglePosition="left" title="E-mails de tous les utilisateurs" />
                <AccordionContent>
                  <Box padding={3}>
                   {
                    emails.map((item:any)=> <Typography><Checkbox indeterminate={true} disabled={true}>{item}</Checkbox></Typography>)
                   }
                  </Box>
                </AccordionContent>
              </Accordion>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter startActions={<Button onClick={() => setIsVisible(prev => !prev)} variant="tertiary">
          Cancel
        </Button>} endActions={<>
          <Button disabled={!nextStepActive} variant="secondary" onClick={() => stepHandler(currentStep + 1)}>L'étape suivante</Button>
          <Button disabled onClick={() => setIsVisible(prev => !prev)}>Envoyer maintenant</Button>
        </>} />
      </ModalLayout>}
    </>
  );
};

export default Homepage;
