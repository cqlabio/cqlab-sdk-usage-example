import { CQLab, MockPatient1 } from '@cqlab/sdk';

const cqlab = new CQLab();

async function execute () {

  const testData = await cqlab.fetchTestDataById('f35d988d-d03f-4e69-8267-4f86af1b2dc8')

  const libraryVersion = await cqlab.fetchLibraryVersionByName({
    labName: 'cq_examples',
    libraryName: 'CheckMedX',
    version: '0.0.1',
  });
  
  /** Execute your CQL. */
  const result = libraryVersion.execute(testData.getData());
  console.log(JSON.stringify(result, null, 2));
}

/** Make sure to wrap await call in an async function */

execute()