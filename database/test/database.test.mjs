import request from 'supertest';
import { expect } from 'chai';
import app from '../src/index.mjs';

describe('Campaigns API', () => {
    let campaignId;

    it('should create a new campaign', async () => {
        const res = await request(app)
        .post('/campaigns')
        .send({
            CampaignName: 'Test Campaign',
            Description: 'This is a test campaign',
            TargetValue: 1000,
            CurrentValue: 100,
            Active: true,
            TargetAddress: '0QBH2lk4LzRaj5W11R0YCbsumUowDQpCUq3PsnkFQGqwb64Z',
        });

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
        campaignId = res.body.id;
    });

    it('should get all campaigns', async () => {
        const res = await request(app).get('/campaigns');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should update a campaign', async () => {
        const res = await request(app)
        .put(`/campaigns/${campaignId}`)
        .send({
            CampaignName: 'Updated Campaign',
            Description: 'This is an updated test campaign',
            TargetValue: 2000,
            CurrentValue: 200,
            Active: false,
            TargetAddress: '456 Updated St',
        });

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('CampaignName', 'Updated Campaign');
    });

    it('should delete a campaign', async () => {
        const res = await request(app).delete(`/campaigns/${campaignId}`);
        expect(res.status).to.equal(200);
    });
});
