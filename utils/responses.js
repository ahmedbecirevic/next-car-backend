export const responseOk = (res, data) => res.status(200).json(data);

export const responseNotFound = (res) => res.status(404).json({ error: 'Not found.' });
