const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.url === '/health') {
    res.end(JSON.stringify({ status: 'UP', message: 'Healthcare service is healthy' }));
  } else {
    res.end(JSON.stringify({ status: 'OK', service: 'Healthcare Portal API' }));
  }
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
// HP-3: Doctor search helper
function searchDoctors(specialty) {
  const doctors = ['Dr. Sharma - Cardiology', 'Dr. Mehta - Dermatology'];
  return doctors.filter(doc => doc.toLowerCase().includes(specialty.toLowerCase()));
}

module.exports = server;