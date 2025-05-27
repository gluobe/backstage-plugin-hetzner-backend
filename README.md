# Hetzner Cloud Backend Plugin

Welcome to the Hetzner Cloud Backend Plugin! This plugin integrates Hetzner Cloud resources into Backstage, enabling comprehensive insights into your cloud infrastructure. It provides backend services to support the visualization and management of Hetzner Cloud resources in Backstage.

## Table of Contents

- [Hetzner Cloud Backend Plugin](#hetzner-cloud-backend-plugin)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Functionalities](#functionalities)
  - [API Specification](#api-specification)
  - [Dependencies](#dependencies)
    - [1. Hetzner Cloud Catalog Backend Module](#1-hetzner-cloud-catalog-backend-module)
    - [2. Frontend Plugin (Optional)](#2-frontend-plugin-optional)
  - [Quick Start](#quick-start)
    - [Installation](#installation)
    - [Development](#development)
  - [OpenAPI Spec Import and Client Generation](#openapi-spec-import-and-client-generation)
  - [Contributing](#contributing)
  - [License](#license)
    - [Attribution](#attribution)

---

## Introduction

The Hetzner Cloud Backend Plugin serves as the foundation for integrating Hetzner Cloud into Backstage. It provides backend services to fetch, synchronize, and manage Hetzner Cloud resources, enabling seamless integration with the Backstage catalog.

---

## Functionalities

This plugin provides the following key functionalities:

- **Data Synchronization**: Fetches and synchronizes Hetzner Cloud resources, such as servers, volumes, and primary IPs, into the Backstage catalog.
- **API Integration**: Acts as a bridge between the Hetzner Cloud API and Backstage, enabling seamless data flow.
- **Support for Catalog Module**: Includes a backend catalog module for importing Hetzner VMs into the Backstage catalog.

---

## API Specification

- **Hetzner Cloud API Spec:**  
  This plugin imports the official Hetzner Cloud OpenAPI specification to generate its API client.  
  You can find the Hetzner Cloud OpenAPI spec here: [https://docs.hetzner.cloud/spec.json](https://docs.hetzner.cloud/spec.json)

- **Backend Plugin API Spec:**  
  The backend plugin itself is also documented with an OpenAPI specification, available at [`./openapi.yaml`](./openapi.yaml).

---

## Dependencies

### 1. Hetzner Cloud Catalog Backend Module

A backend catalog module is available for importing Hetzner VMs into the Backstage catalog. This module enables the synchronization of Hetzner Cloud resources into the Backstage catalog, making them available for visualization and management.

The backend catalog module can be found at the following repository:

[https://github.com/gluobe/backstage-plugin-hetzner-catalog](https://github.com/gluobe/backstage-plugin-hetzner-catalog)

### 2. Frontend Plugin (Optional)

An optional frontend plugin is available for integrating with the backend plugin. The frontend plugin provides a user interface in Backstage to visualize Hetzner Cloud resources. It includes:

- **Hetzner Cloud Page**: An overview of the Hetzner Cloud platform.
- **Hetzner Resource Card**: A card component that displays detailed information about a specific Hetzner Cloud resource directly within the entity page in the Backstage catalog.

The frontend plugin can be found at:

[https://github.com/gluobe/backstage-plugin-hetzner](https://github.com/gluobe/backstage-plugin-hetzner)

Alternatively, you can create your own frontend plugin to suit your specific needs. The backend plugin is designed to support custom frontend implementations, so installing this provided frontend plugin is not mandatory.

However, it is strongly recommended to either install the provided frontend plugin or create your own. Without a frontend plugin, you will not have a user interface in Backstage to visualize Hetzner Cloud resources, which significantly limits the usability of this backend plugin. A frontend plugin is essential for providing insights into your Hetzner Cloud infrastructure and enabling effective management of your resources.

---

## Quick Start

The following sections will help you get the plugin setup and running.

### Installation

1. Install the backend plugin:

   ```bash
   yarn --cwd packages/backend add @gluobe/backstage-plugin-hetzner-backend
   ```

2. Add the plugin to your backend in `packages/backend/src/index.ts`:

   ```ts
   const backend = createBackend();
   backend.add(import('@gluobe/backstage-plugin-hetzner-backend'));
   ```

3. Integrate the backend catalog module for importing Hetzner resources:
   [Catalog Backend Module Repository](https://github.com/gluobe/backstage-plugin-hetzner-catalog)

4. (Optional) Install the frontend plugin for a user interface:
   [Frontend Plugin Repository](https://github.com/gluobe/backstage-plugin-hetzner)

5. Start the backend:
   ```bash
   yarn start
   ```

### Development

This plugin backend can be started in a standalone mode from directly in this package with `yarn start`. It is a limited setup that is most convenient when developing the plugin backend itself.

If you want to run the entire project, including the frontend, run `yarn dev` from the root directory.

---

## OpenAPI Spec Import and Client Generation

This plugin uses the Hetzner Cloud API, and the client is generated from the Hetzner OpenAPI specification. Follow these steps to import the OpenAPI spec and generate the client:

1. **Optional: Install the OpenAPI TypeScript Codegen Tool**  
   The tool used for generating the client is [`openapi-typescript-codegen`](https://github.com/ferdikoomen/openapi-typescript-codegen). Install it globally or use `npx` to run it directly.

2. **Download the Hetzner OpenAPI Spec**  
   Run the following command to download the Hetzner OpenAPI specification:

   ```bash
   curl -o hetzner-spec.json https://docs.hetzner.cloud/spec.json
   ```

3. **Generate the Hetzner API Client**  
   Use the `openapi-typescript-codegen` tool to generate the client:

   ```bash
   npx openapi-typescript-codegen --input hetzner-spec.json --output src/hetznerClient
   ```

   This will generate a TypeScript client in the `src/hetznerClient` directory.

4. **Use the Generated Client**  
   The generated client can now be imported and used in the backend plugin. For example:

   ```typescript
   import { ServersService } from './hetznerClient/services/ServersService';

   const servers = await ServersService.getServers();
   console.log(servers);
   ```

---

## Contributing

We welcome contributions to improve this plugin! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

For major changes, please open an issue first to discuss your ideas.

---

## License

This plugin is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

### Attribution

This plugin was created by [Gluo NV](https://gluo.be).  
Any use or distribution must include proper attribution to the original author.
