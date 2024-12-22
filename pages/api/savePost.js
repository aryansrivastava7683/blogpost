import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { pgname, formData } = req.body;

    const allowedPages = ['writeups', 'news', 'home'];
    if (!allowedPages.includes(pgname)) {
        return res.status(400).json({ error: `'${pgname}' is not a valid page name.` });
    }

    const filePath = path.join(process.cwd(), `public/JSON/${pgname}.json`);

    let data = [];
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
            data = JSON.parse(fileContent);
        } catch {
            console.log('An error occurred')
        }
    }

    data.push({
        title: formData.title,
        content: formData.content,
        timestamp: new Date().toISOString()
    });

    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return res.status(200).json({ message: `Data saved to ${pgname}.json successfully!` });
    } catch{
        console.log('An error occurred')
    }
}
