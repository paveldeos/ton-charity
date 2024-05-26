const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

app.get('/campaigns', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM campaigns');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/campaigns', async (req, res) => {
    const { CampaignName, Description, TargetValue, CurrentValue, Active, TargetAddress } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO campaigns (CampaignName, Description, TargetValue, CurrentValue, Active, TargetAddress) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [CampaignName, Description, TargetValue, CurrentValue, Active, TargetAddress]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.put('/campaigns/:id', async (req, res) => {
    const { id } = req.params;
    const { CampaignName, Description, TargetValue, CurrentValue, Active, TargetAddress } = req.body;
  
    try {
        const result = await pool.query(
            'UPDATE campaigns SET CampaignName = $1, Description = $2, TargetValue = $3, CurrentValue = $4, Active = $5, TargetAddress = $6 WHERE id = $7 RETURNING *',
            [CampaignName, Description, TargetValue, CurrentValue, Active, TargetAddress, id]
        );
    
        if (result.rows.length === 0) {
            return res.status(404).send('Campaign not found');
        }
    
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.delete('/campaigns/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
        const result = await pool.query(
            'DELETE FROM campaigns WHERE id = $1 RETURNING *',
            [id]
        );
    
        if (result.rows.length === 0) {
            return res.status(404).send('Campaign not found');
        }
    
        res.send('Campaign deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
