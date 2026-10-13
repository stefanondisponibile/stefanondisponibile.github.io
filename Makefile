.PHONY: dev

node_modules: package-lock.json
	npm ci
	@touch node_modules

dev: node_modules
	npm run dev
