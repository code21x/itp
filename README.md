<h1 style="font-size: 40px">ITP</h1>

Open source repo for learnland

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/code21x/itp.git
```

2. Navigate to the project directory:

```bash
cd itp\frontend
```

# Docker Setup

> [!NOTE]  
> Your Docker Demon should be online

(Optional) Start a Mongo database using Docker:

```bash
docker run --name itp-db -d -p 27017:27017 mongo --replSet rs0
```
