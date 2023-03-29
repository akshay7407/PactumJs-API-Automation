
import pkg from 'pactum';
import { expect } from 'expect-webdriverio'
const { spec, request, stash, handler, moment, parse, mock, settings } = pkg;

function addMockAPiRequestAndResponse() {

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/hello-world'
        },
        response: {
            status: 200,
            body: {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "ppu": 0.55,
                "batters":
                {
                    "batter":
                        [
                            { "id": "1001", "type": "Regular" },
                            { "id": "1002", "type": "Chocolate" },
                            { "id": "1003", "type": "Mock server API" },
                            { "id": "1004", "type": "Devil's Food" }
                        ]
                },
                "topping":
                    [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5005", "type": "Sugar" },
                        { "id": "5007", "type": "Powdered Sugar" },
                        { "id": "5006", "type": "Chocolate with Sprinkles" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                    ]
            }
        }
    });

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/zip',
            queryParams: {
                zipcode: 90210
            }
        },
        response: {
            status: 200,
            body: {
                zipcode: 90210,
                city: 'Beverly Hills'
            }
        }
    });

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/zip',
            queryParams: {
                zipcode: 12345
            }
        },
        response: {
            status: 200,
            body: {
                zipcode: 12345,
                city: 'Schenectady'
            }
        }
    });
}


describe('Crete mock server', async () => {
    beforeEach(async () => {

        settings.setLogLevel('ERROR');

        await mock.start(9876);
    });

    it('Get the values from Mock API', async () => {
        addMockAPiRequestAndResponse();

        const batter = await spec()
            .get('http://localhost:9876/api/hello-world')
            .expectStatus(200)
            .returns("batters.batter[3]")
        console.log("************************************" + JSON.stringify(batter))
    });

    it('Get API response with query params', async () => {
        addMockAPiRequestAndResponse();
        const response = await spec()
            .get('http://localhost:9876/api/zip').withQueryParams("zipcode", "90210")
            .expectStatus(200)
            .returns("city")
        console.log("************************************" + response)

    });

    afterEach(async () => {
        await mock.stop()
        console.log('Mock server stopped');
    });
});