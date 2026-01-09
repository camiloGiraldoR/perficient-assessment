import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const CODES_FILE = path.join(process.cwd(), 'codes.txt');

app.post('/validate-code', async (req, res) => {
  const { code } = req.body || {};
  if (!code || typeof code !== 'string') return res.status(400).json({ error: 'code required' });
  try {
    const txt = await fs.promises.readFile(CODES_FILE, 'utf8');
    const codes = txt.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    const idx = codes.indexOf(code.trim());
    if (idx === -1) return res.status(404).json({ valid: false });

    // Remove the used code and write file back
    codes.splice(idx, 1);
    await fs.promises.writeFile(CODES_FILE, codes.join('\n'), 'utf8');

    return res.json({ valid: true });
  } catch (err) {
    console.error('Error validating code:', err);
    return res.status(500).json({ error: 'internal' });
  }
});

app.listen(PORT, () => console.log(`Code server listening on http://localhost:${PORT}`));
