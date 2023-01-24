export class Deplono {
    private static data: any[]
    private static config: any
    static run(type: string, config: string, data: any) {
        this.data = data
        this.config = config
        switch (type) {
            case "whatsapp":
                return this.emailService
            case "sms":
                return this.smmsService
            case "email":
                return this.whatsappService
        }
    }

    private static emailService() { }
    private static smmsService() { }
    private static whatsappService() { }
}